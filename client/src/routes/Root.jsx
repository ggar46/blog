import { Outlet } from "react-router-dom";
const Root = () =>
{ return (
<div>
<h1 id="pageTitle"> Gisselle's Blog</h1>
<Outlet/>
</div>
)};
export default Root;