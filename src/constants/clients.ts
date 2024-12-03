import { useTranslation } from "react-i18next";
// import { Client } from "./types"; // Adjust path as needed.

export const useClients = () => {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      name: "Grand Market",
      image: "/clients/grand-market.png",
      description: t("clients.grand_market.description"),
      goal: t("clients.grand_market.goal"),
      solution: t("clients.grand_market.solution"),
      result: t("clients.grand_market.result"),
      comment: t("clients.grand_market.comment"),
      link: "https://grand-market.vercel.app/",
    },
    {
      id: 2,
      name: "GIC Company",
      image: "/clients/global-industrial.png",
      description: t("clients.gic_company.description"),
      goal: t("clients.gic_company.goal"),
      solution: t("clients.gic_company.solution"),
      result: t("clients.gic_company.result"),
      comment: t("clients.gic_company.comment"),
      link: "https://gi-construction.kz/",
    },
    {
      id: 3,
      name: "Join Way Shop",
      image: "/clients/join-way-shop.png",
      description: t("clients.join_way_shop.description"),
      goal: t("clients.join_way_shop.goal"),
      solution: t("clients.join_way_shop.solution"),
      result: t("clients.join_way_shop.result"),
      comment: "",
      link: "https://join-way.com/",
    },
    {
      id: 4,
      name: "Join Way Learn",
      image: "/clients/join-way-learn.png",
      description: t("clients.join_way_learn.description"),
      goal: t("clients.join_way_learn.goal"),
      solution: t("clients.join_way_learn.solution"),
      result: t("clients.join_way_learn.result"),
      comment: "",
      link: "https://learn.join-way.com/",
    },
    {
      id: 5,
      name: "Portfolio Dimash",
      image: "/clients/portfolio-dimash.png",
      description: t("clients.portfolio_dimash.description"),
      goal: t("clients.portfolio_dimash.goal"),
      solution: t("clients.portfolio_dimash.solution"),
      result: t("clients.portfolio_dimash.result"),
      comment: t("clients.portfolio_dimash.comment"),
      link: "https://dimash-aizharykov.is-great.org/",
    },
  ];
};
