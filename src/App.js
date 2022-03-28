import S from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { addTime } from "./reducer";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const [hsl, setHsl] = useState('0,0,0')
  const state = useSelector((state) => state);

  const handleClickAction1 = () => {
    dispatch(addTime());
  };

  const handleClickAction2 = () => {
    return null;
  };

  return (
    <div>
      <S.Header>
        <button onClick={handleClickAction1}>Action 1</button>
        <input onChange={(e) => setHsl(e.target.value)}></input>
        <button onClick={handleClickAction2}>Action 2</button>
      </S.Header>
      <S.Container>
        <S.Box1 hue={hsl?.split(',')?.[0]} sat={hsl?.split(',')?.[1] || 100} lum={hsl?.split(',')?.[2] || 50 }>
          <p>Welcome to Color</p>
          <p>Welcome to Color</p>
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </S.Box1>
        <S.Box2 hue={hsl?.split(',')?.[0]}>
          <p>Welcome to Color</p>
          <p>Welcome to Color</p>
        </S.Box2>
      </S.Container>
    </div>
  );
}

export default App;
