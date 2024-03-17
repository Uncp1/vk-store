import {
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  usePlatform,
  Headline,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import styles from './App.module.css';
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
            <PanelHeader>MyMarket</PanelHeader>
            <Group
              className={styles.group}
              header={
                <Header>
                  <Headline
                    Component={'h1'}
                    level="1"
                    weight="1"
                    className={styles.headline}
                  >
                    Ваша Корзина
                  </Headline>
                </Header>
              }
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
