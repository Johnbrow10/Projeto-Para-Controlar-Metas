import Menu from '../components/menu';

import { Jumbotron, Container, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'

export default function HomePage({ data }) {
    return (
        <>
            <Menu />
            <Jumbotron fluid className="list">
                <style>
                    {`.list{
                         background-color: #171941;
                         padding-top: 30px;
                         padding-bottom: 241px;
                         margin-bottom: 0rem !important;
                    }.title-top{
                        color: #bf38ac;
                    }.list-meta{
                        background-color: #0d345d !important;
                        border-color: #4a0242;
                        color: #fff;
                    }`}
                </style>
                <Container>
                    <h1 className="display-4 text-center title-top">Minhas Metas!!</h1> <hr />
                    <ListGroup>
                        {data.metas.map(meta => (
                            <div key={meta._id}>
                                <ListGroupItem className="list-meta">
                                    <ListGroupItemHeading>{meta.name}</ListGroupItemHeading>
                                    <ListGroupItemText> {meta.description} </ListGroupItemText>
                                    <ListGroupItemText> {meta.status} </ListGroupItemText>
                                </ListGroupItem>
                            </div>
                        ))}
                    </ListGroup>
                </Container>
            </Jumbotron>
        </>
    )
};

export async function getServerSideProps() {
    const response = await fetch(`http://localhost:3535/metas`);

    const data = await response.json();
    return { props: { data } };
};

