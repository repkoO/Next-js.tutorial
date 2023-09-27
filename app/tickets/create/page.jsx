import Link from "next/link";
import CreateForm from "./CreateForm";

export default function CreateTicket() {
  return (
    <main>
        <h2 className="text-primary text-center">
            Add a New Ticket
        </h2>
        <CreateForm />
        <div className="flex justify-center my-6">
        <Link href="/tickets">
          <button className="btn-primary">
            Back to Tickets
          </button>
        </Link>
        </div>
    </main>
  )
}
