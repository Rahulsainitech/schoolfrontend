import React, { useEffect } from "react";
import { getAllFaq } from "../Action/faqAction";
import { useDispatch, useSelector } from "react-redux";
import Error from "../Warning/Error";
import Loader from "../Warning/Loader";
import { Container, Table } from "react-bootstrap";
import AdminNav from './AdminNav'

const FaqSection = () => {
  // const [faqData, setFaqdata] = useState({});
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.getAllFaqReducer);
  const { allFaqQue, error, loading } = userState;
  console.log("allfaq", allFaqQue);
  useEffect(() => {
    dispatch(getAllFaq());
  }, [getAllFaq]);
  return (
    <Container>
      <AdminNav/>
      <h5 className="text-center">All Faq Question</h5>
      {error && <Error error={"error while loading users :" + error} />}
      {loading && <Loader />}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>FAQ Id</th>
            <th>Question</th>
            <th>Answers</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allFaqQue &&
            allFaqQue.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.que}</td>
                  <td>{user.ans}</td>
                  {/* <td>{user.createdAt.substring(0, 10)}</td> */}
                  <td>
                  <button
                      className="btn-primary btn-sm"
                      //   onClick={() => dispatch(deleteUserById(user._id))}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn-danger btn-sm"
                      //   onClick={() => dispatch(deleteUserById(user._id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default FaqSection;
