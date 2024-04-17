import React, { useContext, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { MegaMenu } from 'primereact/megamenu';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { CSSTransition } from 'react-transition-group';
import { RTLContext } from './App';

const AppTopbar = (props) => {
    const isRTL = useContext(RTLContext);
    const navigate = useNavigate();

    const topbarRef1 = useRef(null);
    const topbarRef2 = useRef(null);
    const topbarRef3 = useRef(null);
    const topbarRef4 = useRef(null);

    // Fixed for 6.1.0
    // eslint-disable-next-line
    const searchPanel = useRef(null);

    useEffect(() => {
        // Fixed for 6.1.0
        /*if (props.searchActive) {
            searchPanel.current.element.focus();
        }*/
    }, [props.searchActive]);

    const onInputKeydown = (event) => {
        const key = event.which;

        //escape, tab and enter
        if (key === 27 || key === 9 || key === 13) {
            props.onSearch(false);
        }
    };

    const model = [
        {
            label: 'UI KIT',
            items: [
                [
                    {
                        label: 'UI KIT 1',
                        items: [
                            {
                                label: 'Form Layout',
                                icon: 'pi pi-fw pi-id-card',
                                command: () => {
                                    navigate('/uikit/formlayout');
                                }
                            },
                            {
                                label: 'Input',
                                icon: 'pi pi-fw pi-check-square',
                                command: () => {
                                    navigate('/uikit/input');
                                }
                            },
                            {
                                label: 'Float Label',
                                icon: 'pi pi-fw pi-bookmark',
                                command: () => {
                                    navigate('/uikit/floatlabel');
                                }
                            },
                            {
                                label: 'Button',
                                icon: 'pi pi-fw pi-mobile',
                                command: () => {
                                    navigate('/uikit/button');
                                }
                            },
                            {
                                label: 'File',
                                icon: 'pi pi-fw pi-file',
                                command: () => {
                                    navigate('/uikit/file');
                                }
                            }
                        ]
                    }
                ],
                [
                    {
                        label: 'UI KIT 2',
                        items: [
                            {
                                label: 'Table',
                                icon: 'pi pi-fw pi-table',
                                command: () => {
                                    navigate('/uikit/table');
                                }
                            },
                            {
                                label: 'List',
                                icon: 'pi pi-fw pi-list',
                                command: () => {
                                    navigate('/uikit/list');
                                }
                            },
                            {
                                label: 'Tree',
                                icon: 'pi pi-fw pi-share-alt',
                                command: () => {
                                    navigate('/uikit/tree');
                                }
                            },
                            {
                                label: 'Panel',
                                icon: 'pi pi-fw pi-tablet',
                                command: () => {
                                    navigate('/uikit/panel');
                                }
                            },
                            {
                                label: 'Chart',
                                icon: 'pi pi-fw pi-chart-bar',
                                command: () => {
                                    navigate('/uikit/chart');
                                }
                            }
                        ]
                    }
                ],
                [
                    {
                        label: 'UI KIT 3',
                        items: [
                            {
                                label: 'Overlay',
                                icon: 'pi pi-fw pi-clone',
                                command: () => {
                                    navigate('/uikit/overlay');
                                }
                            },
                            {
                                label: 'Menu',
                                icon: 'pi pi-fw pi-bars',
                                command: () => {
                                    navigate('/uikit/menu');
                                }
                            },
                            {
                                label: 'Message',
                                icon: 'pi pi-fw pi-comment',
                                command: () => {
                                    navigate('/uikit/message');
                                }
                            },
                            {
                                label: 'Misc',
                                icon: 'pi pi-fw pi-circle',
                                command: () => {
                                    navigate('/uikit/misc');
                                }
                            }
                        ]
                    }
                ]
            ]
        },
        {
            label: 'PAGES',
            items: [
                [
                    {
                        label: 'PAGES 1',
                        items: [
                            {
                                label: 'Access',
                                icon: 'pi pi-fw pi-lock',
                                command: () => {
                                    navigate('/access');
                                }
                            },
                            {
                                label: 'Calendar',
                                icon: 'pi pi-fw pi-calendar-plus',
                                command: () => {
                                    navigate('/pages/calendar');
                                }
                            }
                        ]
                    },
                    {
                        label: 'PAGES 2',
                        items: [
                            {
                                label: 'Crud',
                                icon: 'pi pi-fw pi-pencil',
                                command: () => {
                                    navigate('/pages/crud');
                                }
                            },
                            {
                                label: 'Empty Page',
                                icon: 'pi pi-fw pi-circle',
                                command: () => {
                                    navigate('/pages/empty');
                                }
                            }
                        ]
                    }
                ],
                [
                    {
                        label: 'PAGES 3',
                        items: [
                            {
                                label: 'Timeline',
                                icon: 'pi pi-fw pi-calendar',
                                command: () => {
                                    navigate('/pages/timeline');
                                }
                            },
                            {
                                label: 'Help',
                                icon: 'pi pi-fw pi-question-circle',
                                command: () => {
                                    navigate('/pages/help');
                                }
                            }
                        ]
                    },
                    {
                        label: 'PAGES 4',
                        items: [
                            {
                                label: 'Invoice',
                                icon: 'pi pi-fw pi-dollar',
                                command: () => {
                                    navigate('/pages/invoice');
                                }
                            },
                            {
                                label: 'Landing',
                                icon: 'pi pi-fw pi-globe',
                                command: () => {
                                    navigate('/landing');
                                }
                            }
                        ]
                    }
                ],
                [
                    {
                        label: 'PAGES 5',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                command: () => {
                                    navigate('/login');
                                }
                            },
                            {
                                label: 'Not Found',
                                icon: 'pi pi-fw pi-exclamation-circle',
                                command: () => {
                                    navigate('/notfound');
                                }
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                command: () => {
                                    navigate('/error');
                                }
                            }
                        ]
                    }
                ]
            ]
        }
    ];

    const handleLogout = () => {
        // Limpiar el localStorage
        sessionStorage.clear();

        // Lógica adicional de logout si es necesario
        // ...

        // Redirigir al usuario a la página de inicio de sesión u otra página relevante
        navigate('/login');
    };

    return (
        <div className="layout-topbar shadow-4">
            <div className="layout-topbar-left" >
                <button type="button" style={{ cursor: 'pointer' }} className="layout-topbar-logo p-link" onClick={() => navigate('/')}>
                    {' '}
                    <img src="assets/layout/images/logo_bloomalert_blanco_opti.png" alt="" width={200} />
                </button>
                <button type="button" className="layout-menu-button shadow-6 p-link" onClick={props.onMenuButtonClick}>
                    <i className="pi pi-chevron-right"></i>
                </button>
                <button type="button" className="layout-topbar-mobile-button p-link">
                    <i className="pi pi-ellipsis-v fs-large" onClick={props.onMobileTopbarButtonClick}></i>
                </button>
            </div>

            <div className={classNames('layout-topbar-right', { 'layout-topbar-mobile-active': props.mobileTopbarActive })} >
                <div className="layout-topbar-actions-left">
                    <MegaMenu model={[]} className="layout-megamenu" />
                </div>
                <div className="layout-topbar-actions-right">
                    <ul className="layout-topbar-items">
                        <li className="layout-topbar-item layout-search-item" style={{ display: 'none' }}>
                            <button className="layout-topbar-action rounded-circle p-link" onClick={() => props.onSearch(true)}>
                                <i className="pi pi-search fs-large"></i>
                            </button>
                            <CSSTransition nodeRef={topbarRef1} classNames="p-toggleable" timeout={{ enter: 1000, exit: 450 }} in={props.searchActive} unmountOnExit>
                                <div ref={topbarRef1} className="layout-search-panel p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-search"></i>
                                    </span>
                                    <InputText type="text" placeholder="Search" onKeyDown={onInputKeydown} />
                                    <span className="p-inputgroup-addon">
                                        <Button type="button" icon="pi pi-times" className="p-button-rounded p-button-text p-button-plain" onClick={() => props.onSearch(false)}></Button>
                                    </span>
                                </div>
                            </CSSTransition>
                        </li>

                        <li className="layout-topbar-item notifications" style={{ display: 'none' }}>
                            <button className="layout-topbar-action rounded-circle p-link" onClick={(event) => props.onTopbarItemClick({ originalEvent: event, item: 'notifications' })}>
                                <span className="p-overlay-badge">
                                    <i className="pi pi-bell fs-large"></i>
                                    <span className="p-badge p-badge-warning p-badge-dot"></span>
                                </span>
                            </button>

                            <CSSTransition nodeRef={topbarRef2} classNames="p-toggleable" timeout={{ enter: 1000, exit: 450 }} in={props.activeTopbarItem === 'notifications'} unmountOnExit>
                                <ul ref={topbarRef2} className="layout-topbar-action-panel shadow-6 fadeInDown">
                                    <li className="mb-3">
                                        <span className="px-3 fs-small">
                                            You have <b>4</b> new notifications
                                        </span>
                                    </li>
                                    <li className="layout-topbar-action-item">
                                        <div className="flex flex-row align-items-center">
                                            <img src="assets/demo/images/avatar/avatar-1.png" alt="" />
                                            <div className={classNames('flex flex-column', { 'ml-3': !isRTL, 'mr-3': isRTL })} style={{ flexGrow: '1' }}>
                                                <div className="flex align-items-center justify-content-between mb-1">
                                                    <span className="fs-small font-bold">Jerome Bell</span>
                                                    <small>42 mins ago</small>
                                                </div>
                                                <span className="fs-small">How to write content about your photographs?</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="layout-topbar-action-item">
                                        <div className="flex flex-row align-items-center">
                                            <img src="assets/demo/images/avatar/avatar-2.png" alt="" />
                                            <div className={classNames('flex flex-column', { 'ml-3': !isRTL, 'mr-3': isRTL })} style={{ flexGrow: '1' }}>
                                                <div className="flex align-items-center justify-content-between mb-1">
                                                    <span className="fs-small font-bold">Cameron Williamson</span>
                                                    <small>48 mins ago</small>
                                                </div>
                                                <span className="fs-small">Start a blog to reach your creative peak.</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="layout-topbar-action-item" style={{ display: 'none' }}>
                                        <div className="flex flex-row align-items-center">
                                            <img src="assets/demo/images/avatar/avatar-3.png" alt="" />
                                            <div className={classNames('flex flex-column', { 'ml-3': !isRTL, 'mr-3': isRTL })} style={{ flexGrow: '1' }}>
                                                <div className="flex align-items-center justify-content-between mb-1">
                                                    <span className="fs-small font-bold">Anna Miles</span>
                                                    <small>1 day ago</small>
                                                </div>
                                                <span className="fs-small">Caring is the new marketing</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="layout-topbar-action-item">
                                        <div className="flex flex-row align-items-center">
                                            <img src="assets/demo/images/avatar/avatar-4.png" alt="" />
                                            <div className={classNames('flex flex-column', { 'ml-3': !isRTL, 'mr-3': isRTL })} style={{ flexGrow: '1' }}>
                                                <div className="flex align-items-center justify-content-between mb-1">
                                                    <span className="fs-small font-bold">Arlene Mccoy</span>
                                                    <small>4 day ago</small>
                                                </div>
                                                <span className="fs-small">Starting your traveling blog with Vasco.</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </CSSTransition>
                        </li>
                        <li className="layout-topbar-item app" style={{ display: 'none' }}>
                            <button className="layout-topbar-action rounded-circle p-link" onClick={(event) => props.onTopbarItemClick({ originalEvent: event, item: 'apps' })}>
                                <i className="pi pi-table fs-large"></i>
                            </button>

                            <CSSTransition nodeRef={topbarRef3} classNames="p-toggleable" timeout={{ enter: 1000, exit: 450 }} in={props.activeTopbarItem === 'apps'} unmountOnExit>
                                <div ref={topbarRef3} className="layout-topbar-action-panel shadow-6">
                                    <div className="grid grid-nogutter">
                                        <div className="layout-topbar-action-item col-4">
                                            <button className="flex align-items-center flex-column text-color p-link">
                                                <i className="pi pi-image action indigo-bgcolor white-color"></i>
                                                <span>Products</span>
                                            </button>
                                        </div>
                                        <div className="layout-topbar-action-item col-4">
                                            <button className="flex align-items-center flex-column text-color p-link">
                                                <i className="pi pi-file-pdf action orange-bgcolor white-color"></i>
                                                <span>Reports</span>
                                            </button>
                                        </div>
                                        <div className="layout-topbar-action-item col-4">
                                            <button className="flex align-items-center flex-column text-color p-link">
                                                <i className="pi pi-dollar action teal-bgcolor white-color"></i>
                                                <span>Balance</span>
                                            </button>
                                        </div>
                                        <div className="layout-topbar-action-item col-4">
                                            <button className="flex align-items-center flex-column text-color p-link">
                                                <i className="pi pi-cog action pink-bgcolor white-color"></i>
                                                <span>Settings</span>
                                            </button>
                                        </div>
                                        <div className="layout-topbar-action-item col-4">
                                            <button className="flex align-items-center flex-column text-color p-link">
                                                <i className="pi pi-key action bluegrey-bgcolor white-color"></i>
                                                <span>Credentials</span>
                                            </button>
                                        </div>
                                        <div className="layout-topbar-action-item col-4">
                                            <button className="flex align-items-center justify-content-center flex-column text-color p-link">
                                                <i className="pi pi-sitemap action cyan-bgcolor white-color"></i>
                                                <span>Sitemap</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </CSSTransition>
                        </li>
                        <li className="layout-topbar-item" style={{ display: 'none' }}>
                            <label style={{ fontWeight: 'bold' }}>{props.clientId}</label>
                            <button className="layout-topbar-action flex flex-row justify-content-center align-items-center px-2 rounded-circle p-link" onClick={(event) => props.onTopbarItemClick({ originalEvent: event, item: 'profile' })}>
                                <img src="assets/layout/images/user-logo.png" alt="avatar" style={{ width: '32px', height: '32px' }} />
                            </button>

                            <CSSTransition nodeRef={topbarRef4} classNames="p-toggleable" timeout={{ enter: 1000, exit: 450 }} in={props.activeTopbarItem === 'profile'} unmountOnExit>
                                <ul ref={topbarRef4} className="layout-topbar-action-panel shadow-6">
                                    <li className="layout-topbar-action-item">
                                        <a href="/adquisiciones.prime" className="flex flex-row align-items-center p-link" onClick={handleLogout}>
                                            <i className={classNames('pi pi-power-off', { 'mr-2': !isRTL, 'ml-2': isRTL })}></i>
                                            <span>Cerrar Sesion</span>
                                        </a>
                                    </li>
                                </ul>
                            </CSSTransition>
                        </li>
                        <li className="layout-topbar-item" style={{ display: 'none' }}>
                            <button type="button" className="layout-topbar-action rounded-circle p-link" onClick={props.onRightMenuButtonClick}>
                                <i className="pi fs-large pi-arrow-left"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AppTopbar;
