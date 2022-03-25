import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import Profile from '../screens/Profile';
import conge from '../screens/conge';
import Groupe from '../screens/Groupe';
function Pointage() {
	return (
		<View style={styles.container}>
			<Text>Home!</Text>
		</View>
	);
}

function conge() {
	return (
		<View style={styles.container}>
			<Text>Categories!</Text>
		</View>
	);
}

function Groupe() {
	return (
		<View style={styles.container}>
			<Text>New Post!</Text>
		</View>
	);
}

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ color, size }) => {
						let iconName;
						switch (route.name) {
							case 'Pointage':
								iconName = 'edit';
								break;
							case 'conge':
								iconName = 'bell';
								break;
							case 'Groupe':
								iconName = 'settings';
								break;
							default:
								iconName = 'circle';
								break;
						}

						return <Icon name={iconName} size={size} color={color} />;
					},
				})}
				tabBarOptions={{
					activeTintColor: '#9C27B0',
					inactiveTintColor: '#777',
					showLabel: false,
				}}
			>
				<Tab.Screen name="Pointage" component={Pointage} />
				<Tab.Screen name="conge" component={conge} />
        <Tab.Screen name="Groupe" component={Groupe} />
				<Tab.Screen
					name="profile"
					component={Profile}
					options={() => ({
						tabBarIcon: ({tintColor}) => (
							<View>
								<LinearGradient style={styles.iconTabRound} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={['#D500F9', '#4A148C']}>
									<Icon name="plus" size={26} color='#FFF'/>
								</LinearGradient>
							</View>
						),
					})}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	iconTabRound: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
        shadowColor: '#9C27B0',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    }
});

