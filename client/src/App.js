import style from 'styled-components';
import ChatView from './Components/ChatView';
import Home from './Components/Home';

const AppWrapper = style.div`
  display: grid;
  // grid-template-columns: 1fr minmax(600px, 3fr) 1fr;
  width: 100%;
  height: 100%;
`;

const LeftPanel = style.div`
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
  `;

const RightPanel = style.div`
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
  `;

function App() {
  return (
    <AppWrapper>
      {/* <LeftPanel></LeftPanel>
      <ChatView></ChatView>
      <RightPanel></RightPanel> */}
      <Home />
    </AppWrapper>
  );
}

export default App;
