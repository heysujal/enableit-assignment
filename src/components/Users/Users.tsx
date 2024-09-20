import useFetchUsers from "../../../hooks/useFetchUsers";
import ShimmerDisplay from "../ShimmerDisplay/ShimmerDisplay";
import UserCard from "../UserCard/UserCard";

// This component simply renders all the users
const Users = ({ pageNumber }) => {
  const { users, loading, error } = useFetchUsers(pageNumber);
  console.log(users);
  if(loading){
    return <ShimmerDisplay/>
  }
  if(error){
    return <h1 className="text-center">Oops!, {error} </h1>
  }
  return <div className="cards-container flex flex-wrap justify-around">
 {   users?.map((user) => {
      return (
        <UserCard
          
          key={user.ID}
          id={user.ID}
          jobTitle={user.JobTitle}
          emailAddress={user.EmailAddress}
          fullName={user.FirstNameLastName}
          email={user.Email}
          phone={user.Phone}
          company={user.Company}
        />
      );
    })
    }

  </div>
  
};

export default Users;

 