import MalePicture from './assets/1.png';
import FemalePicture from './assets/2.png';
import {IconList} from "./constants";
import {ReactComponent as Background} from "./assets/hero-bg.svg";
import {
    CenterImagesContainer,
    CenterImage,
    RevolvingList,
    PageContainer,
    ListItem,
    ListImage,
    ListText,
} from "./styled";

const App = () => {
    const RenderList = () => {
        const newIconList = IconList.map((ele, index) => {
            return (
                <ListItem key={ele.name} color={ele.color} darkColor={ele.darkColor} itemOrder={index}>
                    <ListImage src={ele.icon}></ListImage>
                    <ListText>{ele.text}</ListText>
                </ListItem>
            )
        })

        return (
            <RevolvingList>
                {newIconList}
            </RevolvingList>
        )
    }

  return (
    <div className="App">
      <PageContainer className="container">
            <Background style={{position: 'absolute', top: '-60px', width: '100vw'}}/>
          <CenterImagesContainer>
              <CenterImage src={FemalePicture}/>
              <CenterImage src={MalePicture} hoverhide/>
          </CenterImagesContainer>
          <div className="revolving-list">
              {RenderList()}
          </div>
      </PageContainer>
    </div>
  );
}

export default App;
