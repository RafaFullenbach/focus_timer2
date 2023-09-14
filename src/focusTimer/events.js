import * as el from './elements.js';
import * as actions from './actions.js';

export function registerControls() {
    el.controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action;
        const color = getComputedStyle(event.target).color;
        const param = event.target.querySelector('span').textContent;

        if (typeof actions[action] != "function") {
            return;
        }

        if (color === 'rgb(0, 0, 0)') {
            return;
        }

        if (color === 'rgb(225, 225, 230)') {
            return;
        }

        actions[action](param);
    })
}

export function registerCards(){
    el.cards.addEventListener('click', (event) => {
        const param = event.target.classList.value;

        if(param){
            actions["toogleMusic"](param);
        }
    })
}

