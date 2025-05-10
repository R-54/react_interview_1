import classes from "./User.module.css";

export function User({ user }) {
  const { id, name, email, username, company, address } = user;
  return (
    <div className={classes.user}>
      <ul>
        <li>ID: {id}</li>
        <li>Name: {name}</li>
        <li>Email: {email}</li>
        <li>Name: {username}</li>
        <li>Company: {company.name}</li>
        <li>Address: {address.city}</li>
      </ul>
    </div>
  );
}
