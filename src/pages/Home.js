import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  Content,
  InputWrapper,
  Input,
  InputLabel,
  GenerateButton,
  TimeGrid,
  TimeSlot,
  Separator,
  TitleLink,
} from "./styles";
import Spinner from "../components/Spinner/Spinner";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import AudioPlayer from "../components/AudioPlayer";

const ToggleSwitch = ({ isOn, onToggle }) => {
  return (
    <div onClick={onToggle}>
      {isOn ? <FaToggleOn /> : <FaToggleOff />}
    </div>
  );
};

const Home = () => {
  const [timeSlots1, setTimeSlots1] = useState([]);
  const [timeSlots2, setTimeSlots2] = useState([]);
  const [numColumns, setNumColumns] = useState(0);
  const [intervalMinutes, setIntervalMinutes] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [shouldReload, setShouldReload] = useState(false);
  const [currentMinutes, setCurrentMinutes] = useState(0);

  const generateTimeSlots = () => {
    setClickCount(clickCount + 1);
  };

  useEffect(() => {
    const updateCurrentMinutes = () => {
      const currentTime = new Date();
      setCurrentMinutes(currentTime.getMinutes());
    };

    const interval = setInterval(updateCurrentMinutes, 60000); // Atualiza a cada minuto

    return () => {
      clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    };
  }, []);

  useEffect(() => {
    if (clickCount >= 4 && clickCount <= 7) {
      setIsLoading(true);
      const minDelay = 5000; // 5 segundos
      const maxDelay = 12000; // 12 segundos
      const randomDelay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

      setTimeout(() => {
        generate();
        setIsLoading(false);
        setShouldReload(true);
      }, randomDelay);
    } else {
      generate();
    }
  }, [clickCount]);

  useEffect(() => {
    if (shouldReload) {
      setClickCount(1);
      setShouldReload(false);
    }
  }, [shouldReload]);

  const generate = () => {
    const intervalValue = parseInt(intervalMinutes);
    if (intervalValue === 0 || isNaN(intervalValue) || numColumns === 0) {
      setTimeSlots1([]);
      setTimeSlots2([]);
      return;
    }

    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();

    const interval = intervalValue * 60000;

    const newTimeSlots1 = [];
    const newTimeSlots2 = [];
    const randomColors1 = generateRandomColors(numColumns);
    const randomColors2 = generateRandomColors(numColumns, 0.3);

    for (let i = 0; i < numColumns; i++) {
      const randomMinutes = Math.floor(Math.random() * 60);
      const randomSeconds = Math.floor(Math.random() * 60);
      const randomDelay = Math.floor(Math.random() * interval);

      const time1 = new Date(currentTime.getTime() + randomDelay);
      time1.setMinutes(randomMinutes);
      time1.setSeconds(randomSeconds);

      const formattedTime1 = `${time1
        .getHours()
        .toString()
        .padStart(2, "0")}:${time1.getMinutes().toString().padStart(2, "0")}:${time1
        .getSeconds()
        .toString()
        .padStart(2, "0")}`;

      const time2 = new Date();
      time2.setHours(currentHour);
      time2.setMinutes(randomMinutes);
      time2.setSeconds(randomSeconds);

      const formattedTime2 = `${time2
        .getHours()
        .toString()
        .padStart(2, "0")}:${time2.getMinutes().toString().padStart(2, "0")}:${time2
        .getSeconds()
        .toString()
        .padStart(2, "0")}`;

      if (randomMinutes >= currentMinutes) {
        newTimeSlots1.push(
          <TimeSlot key={i} color={randomColors1[i]}>
            {formattedTime1}
          </TimeSlot>
        );
      }

      if (randomMinutes > currentMinutes && randomColors2[i] !== "#4169E1") {
        newTimeSlots2.push(
          <TimeSlot key={i} color={randomColors2[i]}>
            {formattedTime2}
          </TimeSlot>
        );
      }
    }

    setTimeSlots1(newTimeSlots1);
    setTimeSlots2(sortTimeSlots(newTimeSlots2));
  };

  const generateRandomColors = (count, frequency = 1) => {
    const colors = ["#FF1493", "#4169E1", "#663399"];
    const randomColors = [];

    for (let i = 0; i < count; i++) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      if (randomColor === "#FF1493" && frequency < 1) {
        if (Math.random() <= frequency) {
          randomColors.push(randomColor);
        } else {
          randomColors.push("#663399");
        }
      } else {
        randomColors.push(randomColor);
      }
    }

    return randomColors;
  };

  const sortTimeSlots = (timeSlots) => {
    const sortedTimeSlots = [...timeSlots].sort((a, b) => {
      const timeA = new Date(`1970/01/01 ${a.props.children}`);
      const timeB = new Date(`1970/01/01 ${b.props.children}`);
      return timeA - timeB;
    });

    return sortedTimeSlots;
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    generateTimeSlots();
  }, []);

  return (
    <Container darkMode={isDarkMode}>
      <Header className={isFirstTime ? "sticky-header" : ""}>
        <h1>
          <TitleLink href="#" className="title-link">
            Aviator Ainbot 1.0
          </TitleLink>
        </h1>
        <ToggleSwitch isOn={isDarkMode} onToggle={toggleDarkMode} />
      </Header>
      <Content>
        <InputWrapper>
          <InputLabel>Coloque o número de previsões</InputLabel>
          <Input
            type="text"
            placeholder="Número de colunas"
            value={numColumns}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (value <= 54) setNumColumns(value);
            }}
            inputMode="numeric"
            pattern="\d*"
          />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Coloque o intervalo de tempo (1 - 15 mn)</InputLabel>
          <Input
            type="text"
            placeholder="Intervalo de tempo"
            value={intervalMinutes}
            min="1"
            max="15"
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (!isNaN(value)) {
                setIntervalMinutes(value);
              }
            }}
            inputMode="numeric"
            pattern="\d*"
          />
        </InputWrapper>
        <GenerateButton
          onClick={generateTimeSlots}
          disabled={isLoading || numColumns === 0 || intervalMinutes === 0}
        >
          {isLoading ? <Spinner /> : "Gerar Sinais"}
        </GenerateButton>
      </Content>
      <Separator>
        <p>Dados Processados</p>
      </Separator>
      <TimeGrid>{timeSlots1}</TimeGrid>
      <Separator>
        <p>Dados de Entrada - 2.00x</p>
      </Separator>
      <TimeGrid>{timeSlots2}</TimeGrid>
      <Separator>
      </Separator>
      <p style={{ color: 'white', marginLeft: '10px' }}>Instruções Abaixo:</p>
      <AudioPlayer /> {/* Adicione esta linha */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', marginBottom: '20px' }}>
    <a href="/pdf.pdf" download>
      <img src="/image.png" alt="PDF" style={{ width: '25px', height: '25px' }} />
    </a>
  </div>
    </Container>
  );
};

export default Home;
