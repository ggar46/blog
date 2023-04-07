import { Outlet } from "react-router-dom";
const Root = () =>
{ return (
<div>
<h1 id="page"> Summer Blog </h1>
<Outlet/>
</div>
)};
export default Root;