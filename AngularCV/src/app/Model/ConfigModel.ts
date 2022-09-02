
export interface MenuItem {
    title: string;
    icon: string;
    active: boolean;
    routing: string;
    order: number;
}

export interface VisiblehomePageItem {
    showMyCV: boolean;
    showAparat: boolean;
    showNuget: boolean;
    showRepository: boolean;
    showActivities: boolean;
    showCertifications: boolean;
    showContact: boolean;
}

export interface ConfigModel {
    MenuItems: MenuItem[];
    visiblehomePageItem: VisiblehomePageItem;
}

export default ConfigModel;

