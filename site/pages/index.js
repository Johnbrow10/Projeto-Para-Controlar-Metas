export default function HomePage({ data }) {
    return (
        <>
            <h1>Minhas Metas!!</h1> <hr />
            {   data.metas.map(meta => (
                <div key={meta._id}>
                    <h2> {meta.name} </h2>
                    <p> {meta.description} </p>
                    <p> {meta.status} </p>
                    <hr />

                </div>
            ))}
        </>
    )
};

export async function getServerSideProps() {
    const response = await fetch(`http://localhost:3535/metas`);

    const data = await response.json();
    return { props: { data } };
};

