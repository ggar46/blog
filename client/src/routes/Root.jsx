import { Outlet } from "react-router-dom";
const Root = () =>
{ return (
<div>
<h1 id="page"> Summer Blog </h1>
<div id="greenheart">
    <i class='fa fa-heart green-color'></i>
</div>
<Outlet/>
</div>
)};
export default Root;