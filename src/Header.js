import { useTodoList, useAuthState } from "./data";

export const Header = () => {
    const [todos] = useTodoList();
    const [auth] = useAuthState();

    console.log("in header", todos);

    return (
        <div className="border-solid border-2 border-sky-500 m-1 p-5">
            <span className="text-xl underline">Header component</span>
            <div>
                {auth.loggedIn ? (
                    <span> User Logged in </span>
                ) : (
                    <span> User not logged in </span>
                )}
            </div>

            <span> Number of todo Items : {todos.length}</span>
        </div>
    );
};
