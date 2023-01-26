import { Fragment } from "react";
import mealsIMG from "../../assets/meals.jpg";
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";

function Header() {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton>Carrinho</HeaderCartButton>
        </header>
        <div className={classes["main-image"]}>
            <img src={mealsIMG} alt="Uma mesa com comidas deliciosas"/>
        </div>
    </Fragment>;
}

export default Header;
