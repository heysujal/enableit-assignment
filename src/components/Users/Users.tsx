import UserCard from "../UserCard/UserCard";

// This component simply renders all the users
interface User {
  ID: string;
  JobTitle: string;
  EmailAddress: string;
  FirstNameLastName: string;
  Email: string;
  Phone: string;
  Company: string;
}

const Users = ({ users }: { users: User[] }) => {
  return (
    <div className="cards-container flex flex-wrap justify-around">
      {users?.map((user: User) => {
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
      })}
    </div>
  );
};

export default Users;
