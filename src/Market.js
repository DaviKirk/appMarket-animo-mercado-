import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

    const produtos = [
        { id: 0, name: 'Arroz tipo 1', img: 'arroz', expec: 'Arroz branco, longo e fino, ideal para o dia a dia.', ingre: 'Arroz polido.', vc: 'Aproximadamente 130 kcal por 100g.' },
        { id: 1, name: 'Feijão Carioca', img: 'feijao', expec: 'Feijão carioca, um dos mais consumidos no Brasil.', ingre: 'Feijão carioca.', vc: 'Aproximadamente 330 kcal por 100g.' },
        { id: 2, name: 'Óleo de Soja', img: 'oleo', expec: 'Óleo de soja refinado, utilizado para cozinhar e fritar.', ingre: 'Óleo de soja refinado.', vc: 'Aproximadamente 90 kcal por colher de sopa (13g).' },
        { id: 3, name: 'Leite Integral', img: 'leite', expec: 'Leite integral, rico em nutrientes e sabor.', ingre: 'Leite integral.', vc: 'Aproximadamente 62 kcal por 100ml.' },
        { id: 4, name: 'Café Tradicional', img: 'cafe', expec: 'Café torrado e moído, ideal para coar.', ingre: 'Café 100% arábica.', vc: 'Aproximadamente 2 kcal por 50ml (sem açúcar).' },
        { id: 5, name: 'Açucar Refinado', img: 'acucar', expec: 'Açúcar refinado, utilizado em diversas receitas e para adoçar bebidas.', ingre: 'Açúcar refinado.', vc: 'Aproximadamente 387 kcal por 100g.' },
        { id: 6, name: 'Macarrão', img: 'macarrao', expec: 'Macarrão tipo espaguete, ideal para diversas receitas.',ingre:'Sêmola de trigo enriquecida com ferro e ácido fólico.' , vc: 'Aproximadamente 371 kcal por 100g.' },


    ]

    const images = {
        candida: require('../assets/candida.png'),
        cafe: require('../assets/café.jpg'),
        arroz: require('../assets/arroz.jpg'),
        acucar: require('../assets/açucar.jpg'),
        feijao: require('../assets/feijão.jpg'),
        leite: require('../assets/leite.jpg'),
        oleo: require('../assets/óleo.jpg'),
        macarrao: require('../assets/macarrao.png'),
    };

    const renderItems = () => {
        return produtos.map((item) =>

            <TouchableOpacity
                key={item.id}
                style={styles.buttonList}
                onPress={() => alertItemName(item)}
            >
                <View style={styles.listItems}>
                    <View>
                        <Text style={styles.listText}> {item.name} </Text>
                    </View>
                    <View>
                        <Image style={styles.ImageProduto} source={images[item.img]} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    const alertItemName = (item) => {
        alert("produto: " + item.name + "\ndescrição: " + item.expec + "\nvalor calorico: " + item.vc + "\ningredientes: "+ item.ingre);
    };

    return (

        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.ViewLogo}>
                <View>
                    <Image style={styles.imageLogo} source={require('../assets/logoMercado.png')} />
                </View>
                <View style={styles.imageTituloBackGround}>
                    <Image style={styles.imageTitulo} source={require('../assets/titulo.png')} />
                </View>
                <View style={styles.viewSubTitle}>
                    <Text style={styles.subTitle}>DAVI MARKET</Text>
                </View>
            </View>
            {renderItems()}

        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#428556'
    },
    imageLogo: {
        width: 200,
        height: 200,
    },
    imageTitulo: {
        width: 200,
        height: 100,
    },
    imageTituloBackGround: {
        paddingLeft: 100,
        paddingRight: 100,
    },
    ViewLogo: {
        alignItems: 'center',
        padding: 10,
    },
    buttonList: {
        backgroundColor: '#fff',
    },
    ImageProduto: {
        width: 150,
        height: 150,
    },
    listText: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#fff'
    },
    subTitle: {
        color: '#fff',
        fontSize: 30,
        fontWeight: "bold"
    },
    viewSubTitle: {
        marginLeft: 4
    },
    listItems: {
        flexDirection: "row",
        backgroundColor: '#3d5b46',
        padding: 10,
        justifyContent: 'space-between'
    }
});