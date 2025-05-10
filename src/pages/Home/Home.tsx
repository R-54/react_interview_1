import { DropdownFilter } from "../../components/DropdownFilter/DropdownFilter";
import { InputFilter } from "../../components/InputFilter/InputFilter";
import { SortButton } from "../../components/SortButton/SortButton";
import { UserList } from "../../components/UserList/UserList";
import { useGetUsers } from "../../hooks/useGetUsers";

export function Home() {
  useGetUsers();

  return (
    <div>
      <InputFilter />
      <DropdownFilter />
      <SortButton />
      <UserList />
    </div>
  );
}
