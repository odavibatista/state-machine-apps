import styles from "./styles.module.css";
import { useState } from "react";

import ElevatorButton from "../ElevatorButton";
import Floor from "../Floor";
import Cabin from "../Cabin";

function Elevador() {
  const TRAVEL_TIME = 500;
  const DOOR_TIME = 500;
  const FLOOR_HEIGHT = 150;
  const CABIN_HEIGHT = 120;
  const SHAFT_PADDING = 12;

  function getFloorPosition(
    targetFloor: number
  ) {
    const floorIndexFromTop = 3 - targetFloor;

    return (
      SHAFT_PADDING +
      floorIndexFromTop * FLOOR_HEIGHT +
      (FLOOR_HEIGHT - CABIN_HEIGHT)
    );
  }

  const [currentFloor, setCurrentFloor] = useState(0);

  const [positionY, setPositionY] = useState(
    getFloorPosition(0)
  );

  const [doorOpen, setDoorOpen] =
    useState(true);

  const [doorWidth, setDoorWidth] =
    useState(100);

  const [isBusy, setIsBusy] =
    useState(false);

  const [elevatorState, setElevatorState] =
    useState("AGUARDANDO COMANDO");

  function wait(ms: number) {
    return new Promise((resolve) =>
      setTimeout(resolve, ms)
    );
  }

  /**
   * Ações internas do elevador
   */
  async function forceOpenDoor() {
    setElevatorState("ABRINDO PORTA");

    setDoorWidth(100);

    await wait(DOOR_TIME);

    setDoorOpen(true);
  }

  async function forceCloseDoor() {
    setElevatorState("FECHANDO PORTA");

    setDoorWidth(0);

    await wait(DOOR_TIME);

    setDoorOpen(false);
  }

  /**
   * Ações manuais do usuário
   */
  async function openDoor() {
    if (doorOpen) {
      setElevatorState("PORTA JÁ ABERTA");
      return;
    }

    await forceOpenDoor();
  }

  async function closeDoor() {
    if (!doorOpen) {
      setElevatorState("PORTA JÁ FECHADA");
      return;
    }

    await forceCloseDoor();
  }

  async function moveToFloor(
    targetFloor: number
  ) {
    if (targetFloor === currentFloor) {
      if (!doorOpen) {
        await forceOpenDoor();
      }

      setElevatorState(
        "ANDAR ATUAL SELECIONADO"
      );

      return;
    }

    setElevatorState(
      targetFloor > currentFloor
        ? "SUBINDO"
        : "DESCENDO"
    );

    setPositionY(
      getFloorPosition(targetFloor)
    );

    await wait(TRAVEL_TIME);

    setCurrentFloor(targetFloor);

    /**
     * Abre automaticamente ao chegar
     */
    await forceOpenDoor();

    setElevatorState(
      "AGUARDANDO COMANDO"
    );
  }

  async function handleFloorSelection(
    selectedFloor: number
  ) {
    if (isBusy) return;

    setIsBusy(true);

    try {
      if (
        selectedFloor !== currentFloor &&
        doorOpen
      ) {
        await forceCloseDoor();
      }

      await moveToFloor(
        selectedFloor
      );
    } finally {
      setIsBusy(false);
    }
  }

  async function handleOpenDoor() {
    if (isBusy) return;

    setIsBusy(true);

    try {
      await openDoor();
    } finally {
      setIsBusy(false);
    }
  }

  async function handleCloseDoor() {
    if (isBusy) return;

    setIsBusy(true);

    try {
      await closeDoor();
    } finally {
      setIsBusy(false);
    }
  }

  return (
    <div className={styles.elevatorSimulator}>
      <div className={styles.elevatorBuilding}>
        <div className={styles.buildingHeader}>
          <h2>
            Simulador de Elevador
          </h2>

          <p>
            Autômato Finito
            Determinístico
          </p>
        </div>

        <div
          className={
            styles.simulatorContent
          }
        >
          <div
            className={
              styles.elevatorShaft
            }
          >
            <Cabin
              doorWidth={doorWidth}
              top={positionY}
            />

            <Floor label="3" />
            <Floor label="2" />
            <Floor label="1" />
            <Floor label="T" />
          </div>

          <div
            className={
              styles.controlPanel
            }
          >
            <div
              className={
                styles.panelTitle
              }
            >
              Painel de Controle
            </div>

            <div
              className={
                styles.floorButtons
              }
            >
              <ElevatorButton
                value="3"
                onClick={() =>
                  handleFloorSelection(3)
                }
              />

              <ElevatorButton
                value="2"
                onClick={() =>
                  handleFloorSelection(2)
                }
              />

              <ElevatorButton
                value="1"
                onClick={() =>
                  handleFloorSelection(1)
                }
              />

              <ElevatorButton
                value="T"
                onClick={() =>
                  handleFloorSelection(0)
                }
              />
            </div>

            <div
              className={
                styles.doorButtons
              }
            >
              <ElevatorButton
                value="<|>"
                onClick={
                  handleOpenDoor
                }
              />

              <ElevatorButton
                value=">|<"
                onClick={
                  handleCloseDoor
                }
              />
            </div>

            <div
              className={
                styles.statusPanel
              }
            >
              <span>
                Andar Atual
              </span>

              <strong>
                {currentFloor === 0
                  ? "Térreo"
                  : `${currentFloor}º`}
              </strong>
            </div>

            <div
              className={
                styles.statusPanel
              }
            >
              <span>Porta</span>

              <strong>
                {doorOpen
                  ? "ABERTA"
                  : "FECHADA"}
              </strong>
            </div>

            <div
              className={
                styles.statusPanel
              }
            >
              <span>Estado</span>

              <strong>
                {elevatorState}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Elevador;