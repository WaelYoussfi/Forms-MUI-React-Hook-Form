import { useForm } from "react-hook-form";

function App() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firsname")} />
            <input {...register("lastname")} />
            <input type="submit"></input>
        </form>
    );
}
export default App;
