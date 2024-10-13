import { headerType } from "@/types"
import { DarkTheme } from "@react-navigation/native"
import { View } from "react-native"
import { Appbar } from "react-native-paper"

const Header = (headersProps: headerType)=> {
const ListIcons = ()=> headersProps.icons.map((items, key)=> (<Appbar.Action rippleColor={ '#2B3538' } iconColor="#fff" key={key} icon={items.name} onPress={items.onpress}/>))

return <Appbar.Header style={{ backgroundColor: '#040E11', height: 30  }} children>
  <View style={{ 
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'flex-end', 
        paddingHorizontal: 0,
        width: '100%',
        marginTop: -25
      }}>
  { headersProps.action && <Appbar.BackAction onPress={headersProps.action.onpress} /> }
  { headersProps.title && <Appbar.Content title={headersProps.title} titleStyle={{ color: '#fff', marginLeft: 10, fontFamily: 'ADLaMDisplay' }}/> }
  <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <ListIcons />
        </View>
  </View>
</Appbar.Header>
}

export default Header