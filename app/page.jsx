import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat nam, id reiciendis voluptatum laboriosam consectetur repellat harum, dignissimos numquam animi quidem? Dolore corrupti, fuga enim ipsam libero nesciunt sunt?</p>
    
    <div className="flex justify-center my-8">
      <Link href="/tickets">
        <button className="btn-primary">View Tickets</button>
      </Link>
    </div>

    <h2>Company Updates</h2>

    <div className="card">
      <h3>New member of the web dev team...</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, incidunt voluptatibus libero expedita, suscipit nesciunt exercitationem error repellat magnam quo ad? Corrupti incidunt ex numquam architecto dolores animi repudiandae saepe!</p>
    </div>
    <div className="card">
      <h3>New website live!</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi vel, culpa voluptates obcaecati nobis praesentium blanditiis numquam qui quod cum sapiente minus fugiat illo, modi error ex officia amet tempora?</p>
    </div>
    </main>
  )
}
