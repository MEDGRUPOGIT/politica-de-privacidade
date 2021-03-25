import { Component, Prop, State, h } from '@stencil/core';
import { getHost, getKey, getValue, setKey } from '../../utils/storage';

@Component({
  tag: 'medgrupo-privacy-policy',
  styleUrl: 'medgrupo-privacy-policy.scss',
  shadow: true,
})
export class PrivacyPolicy {

  @Prop() message = 'Ao continuar a navegação, você concorda com a nossa política de privacidade.';
  @Prop() link = 'https://site.medgrupo.com.br/politica-de-privacidade/';
  @Prop() linkText = 'Saiba mais';
  @Prop() buttonText = 'Entendi';

  @State() showed = false;

  componentWillRender() {
    this.showed = !(!!getKey(getHost()));
  }

  onButtonClick() {
    setKey(getHost(), getValue());
    this.showed = false;
  }

  render() {
    const content = this.showed ?
    (<div class="container">
      <div class="content">
        <div class="content__text">{this.message} &nbsp; <a href={this.link} target="_blank" class="content__link">{this.linkText}</a></div>
        <button class="content__button" onClick={this.onButtonClick.bind(this)}>{this.buttonText}</button>
      </div>
     </div>) : '';

    return content;
  }
}
