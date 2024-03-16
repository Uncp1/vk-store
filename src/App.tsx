import {
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  usePlatform,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './App.css';
import CheckoutPage from './pages/checkout/checkout';

const App = () => {
  const platform = usePlatform();

  return (
    <SplitLayout
      header={platform !== 'vkcom' && <PanelHeader delimiter="none" />}
    >
      <SplitCol autoSpaced>
        <View activePanel="main">
          <Panel id="main">
            <PanelHeader>VKUI</PanelHeader>
            <Group
              // className={'.group'} do something
              header={<Header mode="secondary">Items</Header>}
            >
              <CheckoutPage />
            </Group>
          </Panel>
        </View>
      </SplitCol>
    </SplitLayout>
  );
};

export default App;
