src>shared>components>layout>temporary>RouterMenu.tsx

import type { IComponent } from '@nova/ui-library/types';
import { XSwitch, XButton } from 'opus-x-react-assets';
import router from '@/app/router';
import { userEffect, useState, useRef } from 'react';

interface IRouterMenuProps {
	text?: string;
}

const RouterMenu : IComponent<IRouterMenuProps> = () => {
	const listRef = useRef<HTMLDivElement>(null);
	const [isOpenTempMenu, setIsOpenTempMenu] = useState('none');
	const [routes, setRoutes] = useState<any[]>([]);
	const [remoteMode, setRemoteMode] = useState<boolean>(
		localStorage.getItem('__NOVA_REMOTE_MODE__') === 'true' ? true : false,
	);
	
	const getRemoteMode = () => {
		let rmode = true;
		if (localStorage.getItem('__NOVA_REMOTE_MODE__')) {
			rmode = localStorage.getItem('__NOVA_REMOTE_MODE__') === 'true' ? ture : false;			
		} else {
			localStorage.setItem('__NOVA_REMOTE_MODE__', 'true');
		}
		setRemoteMode(rmode);
	};
	
	const handlerSelectedChange = (selected : boolan) = > {
		localStorage.setItem('__NOVA_REMOTE_MODE__', selected ? 'true' : 'false');
		setRemoteMode(selected);
	};
	
	const getChildrenRoute = (rootPath: string, childRoute: any[]) : any[] => {
		let childRouteArr :  any[] = [];
		for (let i=0; i < childRoute.length; i++){
			if (childRoute[i].path && childRoute[i].path != '*' && childRoute[i].path != '/') {
				if (childRoute[i].children && childRoute[i].children.length > 0) {
					childRouteArr =  childRouteArr.concat (
						getChildrenRoute('${rootPath}/${childRoute[i].path}', childRoute[i].children),
					);
				
				} else{
					childRouteArr.push({
						content: 'button',
						label: '/${rootPath}/${childRoute[i].path}',
						leadingIconName : 'scissors',
						subtext : childRoute[i].name,
						subtextPosition : 'right',
					});
				}
			}
		}		
		return childRouteArr;
	};
	
	const getRoute = () => {
		if (router.routes) {
			let allRoute = [
				{
					content : 'button',
					label: '/',
					leaingIconName : 'scissors',
					subtext : 'main,
					subtextPosition: 'right',
				},
			];
			for (let i = 0 ;  i < router.routes.length; i++) {
				if (router.routes[i].path && router.routes[i].path != '*' && router.routes[i].path != '/') {
					if (router.routes[i].children && router.routes[i].children.length > 0) {
						allRoute = allRoute.concat(getChildrenRoute(router.routes[i].path router.routes[i].children));
					}
				}
				setRoutes(allRoute);
			}
		}	
	};
	
	// 임시메뉴버튼
	const handlerTempMenuBtn = (event : any) => {
		if (isOpenTempMenu === 'none') {
			console.log(event);
			setIsOpenTempMenu('inline');
			setTimeout( () => {
				(listRef.current as HTMLDivElement).focus();
			}, 500);
		} else {
			setIsOpenTempMenu('none');
		}	
	};
	
	// 암시메뉴  blur 함수
	const handlerUlBlur = () => {
		setIsOpenTempMenu('none');
	}
	
	useEffect( () => {
		getRemoteMode();
		getRoute();
	}, []);
	return (
		<>
			<div style = ({ transform : 'scale(0,7)'}) >
				<span style={}>
					<XSwitch
						onSelectedChange = {handlerSelectedChange}
					/>
				</span>
				<span>
					<XButton onClick={(event) => handlerTempMenuBtn(event)}>
					임시메뉴
					</XButton>
					<div>
						<ul>
							<div
								onClick = {(e) => e.preventDefault}
								ref = {listRef}
								tabIndex = {0}
								onBlur = {handlerUlBlur}
								style = {{ color: '#' , paddingTop: '10px'}}
							>
								{routes.map((r: any, index: any) => {
									return (
										<li
											key={index}
											style={{
												padding : '5px 10px',
												position : 'relative',
												width : '400px',
												borderBottom : '1px solid ',
											}}
											onClick = { () => handlerTempMenuSelect(r.label, r.subtext) }
										>
											<span style= {}>
												<strong>  {r.subtext} </strong>
											</span> 
											<span>  {r.label} </span>
										</li>
										);
									})}
							</div>
						</ul>
					</div>
				</span>
			</div>
		</>
	);	
};

RouterMenu.displayName = 'RouterMenu';
export default RouterMenu;
