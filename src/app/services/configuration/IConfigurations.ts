export interface INavListItemVO {
    textId: string;
    path: string;
    iconId: string;
}

export interface INavigationVO {
    navListItems: Array<INavListItemVO>;
}

export interface IAboutVO {
    iconUrl: string;
}

export interface IEditorVO {
    iconUrl: string;
}

export interface INavigationBarIconVO {
    svgIconId: string;
    href: string;
}

export interface INavigationBarVO {
    icons: Array<INavigationBarIconVO>;
}

export interface IPhotoVO {
    previewUrl: string;
    fullSizeUrl: string;
}

export interface IVideoVO {
    iframeUrl: string;
}

export interface IDownloadItemVO {
    href: string;
    text: string;
}

export interface IDownloadVO {
    headerTextId: string;
    items: Array<IDownloadItemVO>;
}

export interface ILayoutVO {
    sideNavCollapseWidth: string;
}

export interface ILocaleVO {
    defaultLanguage: string;
    supportedLanguages: Array<string>;
}

export interface ISvgIconVO {
    id: string;
    path: string;
}

export interface IConfiguration {
    locale: ILocaleVO;
    about: IAboutVO;
    editor: IEditorVO;
    navigation: INavigationVO;
    layout: ILayoutVO;
    svgIcons: Array<ISvgIconVO>;
    navigationBar: INavigationBarVO;
    photos: Array<IPhotoVO>;
    videos: Array<IVideoVO>;
    downloads: Array<IDownloadVO>;
}
