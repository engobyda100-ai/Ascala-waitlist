"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"

interface WaitlistEntry {
  email: string
  submittedAt: string
}

export default function WaitlistTable({ entries }: { entries: WaitlistEntry[] }) {
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const allChecked = entries.length > 0 && selected.size === entries.length
  const someChecked = selected.size > 0 && !allChecked

  function toggleAll() {
    setSelected(allChecked ? new Set() : new Set(entries.map((e) => e.email)))
  }

  function toggleOne(email: string) {
    setSelected((prev) => {
      const next = new Set(prev)
      next.has(email) ? next.delete(email) : next.add(email)
      return next
    })
  }

  async function deleteEmails(emails: string[]) {
    const label =
      emails.length === 1
        ? `Delete ${emails[0]}?`
        : `Delete ${emails.length} selected entries?`
    if (!window.confirm(`${label}\n\nThis cannot be undone.`)) return

    await fetch("/api/waitlist/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ emails }),
    })

    setSelected(new Set())
    startTransition(() => router.refresh())
  }

  return (
    <>
      {selected.size > 0 && (
        <div className="flex items-center justify-between mb-3 px-1">
          <span className="text-sm text-muted-foreground">
            {selected.size} selected
          </span>
          <button
            onClick={() => deleteEmails([...selected])}
            disabled={isPending}
            className="text-sm px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 disabled:opacity-50"
          >
            Delete Selected ({selected.size})
          </button>
        </div>
      )}

      <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-muted text-muted-foreground text-left">
            <th className="px-4 py-3">
              <input
                type="checkbox"
                checked={allChecked}
                ref={(el) => { if (el) el.indeterminate = someChecked }}
                onChange={toggleAll}
                className="cursor-pointer"
              />
            </th>
            <th className="px-4 py-3 font-medium">#</th>
            <th className="px-4 py-3 font-medium">Email</th>
            <th className="px-4 py-3 font-medium">Submitted</th>
            <th className="px-4 py-3 font-medium"></th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, i) => (
            <tr
              key={entry.email}
              className={`border-t border-border transition-colors ${selected.has(entry.email) ? "bg-red-50" : ""}`}
            >
              <td className="px-4 py-3">
                <input
                  type="checkbox"
                  checked={selected.has(entry.email)}
                  onChange={() => toggleOne(entry.email)}
                  className="cursor-pointer"
                />
              </td>
              <td className="px-4 py-3 text-muted-foreground">{i + 1}</td>
              <td className="px-4 py-3 text-foreground font-mono">{entry.email}</td>
              <td className="px-4 py-3 text-muted-foreground">
                {new Date(entry.submittedAt).toLocaleString()}
              </td>
              <td className="px-4 py-3">
                <button
                  onClick={() => deleteEmails([entry.email])}
                  disabled={isPending}
                  className="text-red-500 hover:text-red-700 text-xs font-medium disabled:opacity-50"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
