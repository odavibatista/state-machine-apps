import React, { useState } from "react";
import styles from "./styles.module.css";
import Money from "./components/Money";
import MachineButton from "./components/MachineButton";
import Product from "./components/Product";
import Header from "../common/Header";

const Vending_Machine: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [balance, setBalance] = useState(0);
  const [boughtProduct, setBoughtProduct] = useState<string>("");

  const productsList = [
    { reference: "a", price: 6 },
    { reference: "b", price: 7 },
    { reference: "c", price: 8 },
  ];

  const products = productsList.map((product) => (
    <div className={styles.product} key={product.reference}>
      <Product
        identifier={product.reference}
        price={product.price}
        totalMoney={balance}
      />
      <Product
        identifier={product.reference}
        price={product.price}
        totalMoney={balance}
      />
      <Product
        identifier={product.reference}
        price={product.price}
        totalMoney={balance}
      />
    </div>
  ));

  const productAlert = (product: { reference: string; price: number }) => {
    alert(
      `Você retirou o produto ${selectedProduct.toUpperCase()}!${
        balance === product.price
          ? "\n\nNão há troco."
          : `\n\nVocê recebeu R$${balance - product.price}.00 de troco.`
      }`
    );
  };

  const handleProductClick = (product: {
    reference: string;
    price: number;
  }) => {
    if (balance >= product.price) {
      setSelectedProduct(product.reference);
      setBoughtProduct("");
    } else {
      alert(
        `Seu saldo é insuficiente para selecionar o produto ${product.reference.toUpperCase()}.`
      );
    }
  };

  const handleMoneyClick = (value: number) => {
    setBoughtProduct("");

    if (balance < 30) {
      setBalance((prev) => prev + value);
    } else {
      alert("Seu limite de crédito é R$30.");
    }
  };

  const handleExtractionClick = () => {
    const selected = productsList.find(
      (product) => product.reference === selectedProduct
    );

    if (!selected) {
      alert("Selecione um produto primeiro.");
      return;
    }

    if (balance < selected.price) {
      alert("Saldo insuficiente.");
      return;
    }

    productAlert(selected);

    setBalance(0);
    setBoughtProduct(selected.reference);
    setSelectedProduct("");
  };

  return (
    <section id={styles.vendingMachine}>
      <Header />

      <div id={styles.machineBody}>
        <div className={styles.machineHeader}>
          <h1>Automata Vending Machine</h1>
          <p>Simulação de Autômato Finito</p>
        </div>

        <section id={styles.machineUpperPart}>
          <div id={styles.machineGlass}>{products}</div>

          <div id={styles.machineControls}>
            <div id={styles.machineInstructions}>
              <span>Painel de Controle</span>
            </div>

            <div id={styles.buttonsArea}>
              <MachineButton
                value="a"
                onClick={() => handleProductClick(productsList[0])}
              />
              <MachineButton
                value="b"
                onClick={() => handleProductClick(productsList[1])}
              />
              <MachineButton
                value="c"
                onClick={() => handleProductClick(productsList[2])}
              />
            </div>

            <span id={styles.balance}>
              SALDO:
              <strong> R$ {balance}.00</strong>
            </span>

            <span id={styles.selectedProduct}>
              {selectedProduct ? (
                <>
                  <p>
                    Produto: <strong>{selectedProduct.toUpperCase()}</strong>
                  </p>

                  <p>
                    Valor: R$
                    {
                      productsList.find(
                        (p) => p.reference === selectedProduct
                      )?.price
                    }
                    .00
                  </p>
                </>
              ) : (
                <p>Nenhum produto selecionado</p>
              )}
            </span>

            <button
              id={styles.extraction}
              onClick={handleExtractionClick}
            >
              Retirar Produto
            </button>
          </div>
        </section>

        <div id={styles.evacuation}>
          {boughtProduct && (
            <img
              id={styles.boughtProduct}
              src={`/assets/produtos/produto_${boughtProduct}.png`}
              alt="Produto comprado"
              onClick={() => setBoughtProduct("")}
            />
          )}
        </div>
      </div>

      <section id={styles.moneyBills}>
        <Money value={1} onClick={() => handleMoneyClick(1)} />
        <Money value={2} onClick={() => handleMoneyClick(2)} />
        <Money value={5} onClick={() => handleMoneyClick(5)} />
      </section>
    </section>
  );
};

export default Vending_Machine;