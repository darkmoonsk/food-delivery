import React from "react";
import classes from "./MealsSummary.module.css";

function MealsSummary() {
    return (
        <section className={classes.summary}>
            <h2>Comida Deliciosa, Entregue Para Você</h2>
            <p>
                Escolha sua refeição favorita de nossa vasta seleção de
                refeições disponiveis e disfrute de um delicioso almoço ou
                jantar em sua casa
            </p>
            <p>
                Todas as nossas refeições são cozinhadas com ingredientes de
                alta qualidade, no tempo certo e claro por Chefs experientes.
            </p>
        </section>
    );
}

export default MealsSummary;
