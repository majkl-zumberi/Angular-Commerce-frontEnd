'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">angular-commerce documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-0b92c906e89c784927fd64c0b90e9e3d"' : 'data-target="#xs-components-links-module-AppModule-0b92c906e89c784927fd64c0b90e9e3d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-0b92c906e89c784927fd64c0b90e9e3d"' :
                                            'id="xs-components-links-module-AppModule-0b92c906e89c784927fd64c0b90e9e3d"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CartProductItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CartProductItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuLinkComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuLinkComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-d6dbbd280bec1a43aa7ec4c5eb401bb2"' : 'data-target="#xs-components-links-module-AuthModule-d6dbbd280bec1a43aa7ec4c5eb401bb2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-d6dbbd280bec1a43aa7ec4c5eb401bb2"' :
                                            'id="xs-components-links-module-AuthModule-d6dbbd280bec1a43aa7ec4c5eb401bb2"' }>
                                            <li class="link">
                                                <a href="components/AuthComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignUpComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignUpComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link">AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoreModule-67f5bb9da681462ebb64fa0aa62262d5"' : 'data-target="#xs-injectables-links-module-CoreModule-67f5bb9da681462ebb64fa0aa62262d5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-67f5bb9da681462ebb64fa0aa62262d5"' :
                                        'id="xs-injectables-links-module-CoreModule-67f5bb9da681462ebb64fa0aa62262d5"' }>
                                        <li class="link">
                                            <a href="injectables/HttpCommunicationsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>HttpCommunicationsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-8caa15bca2683c7065a834c2f5e06012"' : 'data-target="#xs-components-links-module-HomeModule-8caa15bca2683c7065a834c2f5e06012"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-8caa15bca2683c7065a834c2f5e06012"' :
                                            'id="xs-components-links-module-HomeModule-8caa15bca2683c7065a834c2f5e06012"' }>
                                            <li class="link">
                                                <a href="components/ClotheComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClotheComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClotheDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClotheDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-HomeModule-8caa15bca2683c7065a834c2f5e06012"' : 'data-target="#xs-injectables-links-module-HomeModule-8caa15bca2683c7065a834c2f5e06012"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HomeModule-8caa15bca2683c7065a834c2f5e06012"' :
                                        'id="xs-injectables-links-module-HomeModule-8caa15bca2683c7065a834c2f5e06012"' }>
                                        <li class="link">
                                            <a href="injectables/ClothesFacadeService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ClothesFacadeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link">HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SessionExpiredModule.html" data-type="entity-link">SessionExpiredModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SessionExpiredModule-b7d48ce7146adbe992c2b2a116fb1147"' : 'data-target="#xs-components-links-module-SessionExpiredModule-b7d48ce7146adbe992c2b2a116fb1147"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SessionExpiredModule-b7d48ce7146adbe992c2b2a116fb1147"' :
                                            'id="xs-components-links-module-SessionExpiredModule-b7d48ce7146adbe992c2b2a116fb1147"' }>
                                            <li class="link">
                                                <a href="components/SessionExpiredComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SessionExpiredComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SessionExpiredRoutingModule.html" data-type="entity-link">SessionExpiredRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-2352c61b90abb2cc4c89824096558aae"' : 'data-target="#xs-components-links-module-SharedModule-2352c61b90abb2cc4c89824096558aae"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-2352c61b90abb2cc4c89824096558aae"' :
                                            'id="xs-components-links-module-SharedModule-2352c61b90abb2cc4c89824096558aae"' }>
                                            <li class="link">
                                                <a href="components/CartItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CartItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ColorPickerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ColorPickerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DressPreviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DressPreviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DressTypePickerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DressTypePickerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SuccessComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SuccessComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WarningComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WarningComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ShoppingCartModule.html" data-type="entity-link">ShoppingCartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ShoppingCartModule-53b88ea201c8ee5f35bb815d9dfdc35d"' : 'data-target="#xs-components-links-module-ShoppingCartModule-53b88ea201c8ee5f35bb815d9dfdc35d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ShoppingCartModule-53b88ea201c8ee5f35bb815d9dfdc35d"' :
                                            'id="xs-components-links-module-ShoppingCartModule-53b88ea201c8ee5f35bb815d9dfdc35d"' }>
                                            <li class="link">
                                                <a href="components/FirstStepComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FirstStepComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SecondStepComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SecondStepComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShoppingCartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShoppingCartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ThirdStepComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ThirdStepComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ShoppingCartModule-53b88ea201c8ee5f35bb815d9dfdc35d"' : 'data-target="#xs-injectables-links-module-ShoppingCartModule-53b88ea201c8ee5f35bb815d9dfdc35d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ShoppingCartModule-53b88ea201c8ee5f35bb815d9dfdc35d"' :
                                        'id="xs-injectables-links-module-ShoppingCartModule-53b88ea201c8ee5f35bb815d9dfdc35d"' }>
                                        <li class="link">
                                            <a href="injectables/ShoppingCartFacadeService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ShoppingCartFacadeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ShoppingCartRoutingModule.html" data-type="entity-link">ShoppingCartRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/authEffects.html" data-type="entity-link">authEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthFacadeService.html" data-type="entity-link">AuthFacadeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/cartEffects.html" data-type="entity-link">cartEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/clothesEffects.html" data-type="entity-link">clothesEffects</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link">AuthInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/SessionInterceptor.html" data-type="entity-link">SessionInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/CanActivateAuthGuard.html" data-type="entity-link">CanActivateAuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/CanActivateCompsGuard.html" data-type="entity-link">CanActivateCompsGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/CanActivateStepsGuard.html" data-type="entity-link">CanActivateStepsGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/CanLoadAuthGuard.html" data-type="entity-link">CanLoadAuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/CanLoadCompsGuard.html" data-type="entity-link">CanLoadCompsGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppState.html" data-type="entity-link">AppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthResponse.html" data-type="entity-link">AuthResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CartProduct.html" data-type="entity-link">CartProduct</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CartState.html" data-type="entity-link">CartState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ClothesState.html" data-type="entity-link">ClothesState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Dress.html" data-type="entity-link">Dress</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DressImageLink.html" data-type="entity-link">DressImageLink</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserState.html" data-type="entity-link">UserState</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});