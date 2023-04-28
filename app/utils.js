import { Application } from '@nativescript/core';

export function setFullscreen() {
	Application.android.startActivity.getWindow().getDecorView().setSystemUiVisibility(android.view.View.SYSTEM_UI_FLAG_FULLSCREEN);
}