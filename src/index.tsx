const appElement: HTMLElement | null = document.getElementById('app');
const showMessage = (message:string) => appElement && (appElement.innerHTML = message);
showMessage('Hello world');
