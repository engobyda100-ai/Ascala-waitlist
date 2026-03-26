import { promises as fs } from "fs"
import path from "path"

interface WaitlistEntry {
  email: string
  submittedAt: string
}

async function getEntries(): Promise<WaitlistEntry[]> {
  try {
    const raw = await fs.readFile(path.join(process.cwd(), "data", "waitlist.json"), "utf-8")
    return JSON.parse(raw) as WaitlistEntry[]
  } catch {
    return []
  }
}

export default async function AdminPage() {
  const entries = await getEntries()

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-foreground mb-2">Waitlist</h1>
        <p className="text-muted-foreground mb-6">{entries.length} {entries.length === 1 ? "person" : "people"} signed up</p>

        {entries.length === 0 ? (
          <p className="text-muted-foreground">No submissions yet.</p>
        ) : (
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-muted text-muted-foreground text-left">
                <th className="px-4 py-3 font-medium">#</th>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Submitted</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, i) => (
                <tr key={entry.email} className="border-t border-border">
                  <td className="px-4 py-3 text-muted-foreground">{i + 1}</td>
                  <td className="px-4 py-3 text-foreground font-mono">{entry.email}</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {new Date(entry.submittedAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
