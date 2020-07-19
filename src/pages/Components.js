import React, { Fragment } from "react";

import Title from "../components/Title";
import Intro from "../components/Intro";
import TableComponents from "../container/ComponentsGrid";

import ColaboratorCard from "../app-components/ColaboratorCard";

export const Components = () => {
  return (
    <Fragment>
      <Title title="Componentes" />
      <Intro intro="Esta página muestra una lista de todos los componentes basados en código." />
      <TableComponents />
      <ColaboratorCard title="Frontend" name="Héctor Reyes" />
    </Fragment>
  );
};
