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
                    <a href="index.html" data-type="index-link">angular documentation</a>
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
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
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
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-14183cb0d72eccfd8476d64602fa7dc7"' : 'data-target="#xs-components-links-module-AppModule-14183cb0d72eccfd8476d64602fa7dc7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-14183cb0d72eccfd8476d64602fa7dc7"' :
                                            'id="xs-components-links-module-AppModule-14183cb0d72eccfd8476d64602fa7dc7"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelloComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelloComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PagesModule.html" data-type="entity-link">PagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PagesModule-4e31d1d9deb2ecc469477b52bcb761eb"' : 'data-target="#xs-components-links-module-PagesModule-4e31d1d9deb2ecc469477b52bcb761eb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PagesModule-4e31d1d9deb2ecc469477b52bcb761eb"' :
                                            'id="xs-components-links-module-PagesModule-4e31d1d9deb2ecc469477b52bcb761eb"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PagesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PagesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaymentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaymentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegistrationModule.html" data-type="entity-link">RegistrationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RegistrationModule-1bcec9d2ec604402fc50a197a59e5fca"' : 'data-target="#xs-components-links-module-RegistrationModule-1bcec9d2ec604402fc50a197a59e5fca"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegistrationModule-1bcec9d2ec604402fc50a197a59e5fca"' :
                                            'id="xs-components-links-module-RegistrationModule-1bcec9d2ec604402fc50a197a59e5fca"' }>
                                            <li class="link">
                                                <a href="components/RegistrationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegistrationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-00df3763374adf379e853045518b7c5a"' : 'data-target="#xs-components-links-module-SharedModule-00df3763374adf379e853045518b7c5a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-00df3763374adf379e853045518b7c5a"' :
                                            'id="xs-components-links-module-SharedModule-00df3763374adf379e853045518b7c5a"' }>
                                            <li class="link">
                                                <a href="components/AtomsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AtomsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InputComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LinkComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LinkComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistrationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegistrationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TooltipComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TooltipComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link">UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiModule-15d1ba147a06389b67339b3a0a547abf"' : 'data-target="#xs-components-links-module-UiModule-15d1ba147a06389b67339b3a0a547abf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-15d1ba147a06389b67339b3a0a547abf"' :
                                            'id="xs-components-links-module-UiModule-15d1ba147a06389b67339b3a0a547abf"' }>
                                            <li class="link">
                                                <a href="components/IconComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IconComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InputMoleculesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InputMoleculesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InputRememberMoleculesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InputRememberMoleculesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InputWithCheckboxComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InputWithCheckboxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InputWithIconComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InputWithIconComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-UiModule-15d1ba147a06389b67339b3a0a547abf"' : 'data-target="#xs-directives-links-module-UiModule-15d1ba147a06389b67339b3a0a547abf"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-UiModule-15d1ba147a06389b67339b3a0a547abf"' :
                                        'id="xs-directives-links-module-UiModule-15d1ba147a06389b67339b3a0a547abf"' }>
                                        <li class="link">
                                            <a href="directives/CreditCardDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreditCardDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-UiModule-15d1ba147a06389b67339b3a0a547abf"' : 'data-target="#xs-pipes-links-module-UiModule-15d1ba147a06389b67339b3a0a547abf"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-UiModule-15d1ba147a06389b67339b3a0a547abf"' :
                                            'id="xs-pipes-links-module-UiModule-15d1ba147a06389b67339b3a0a547abf"' }>
                                            <li class="link">
                                                <a href="pipes/CardPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AtomsComponent.html" data-type="entity-link">AtomsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ButtonComponent.html" data-type="entity-link">ButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ButtonComponent-1.html" data-type="entity-link">ButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CheckboxComponent.html" data-type="entity-link">CheckboxComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InputComponent.html" data-type="entity-link">InputComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InputComponent-1.html" data-type="entity-link">InputComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LinkComponent.html" data-type="entity-link">LinkComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ListItemComponent.html" data-type="entity-link">ListItemComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MoleculesComponent.html" data-type="entity-link">MoleculesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OrganismsComponent.html" data-type="entity-link">OrganismsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PaginationComponent.html" data-type="entity-link">PaginationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TableComponent.html" data-type="entity-link">TableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TooltipComponent.html" data-type="entity-link">TooltipComponent</a>
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
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
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