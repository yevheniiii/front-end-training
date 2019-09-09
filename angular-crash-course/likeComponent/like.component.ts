export class LikeComponent {

    constructor (private _likesCount: number, private _isSelected: boolean) {

    }

    onClick() {
        this._likesCount += (this._isSelected) ? -1 : +1;
        this._isSelected != this._isSelected;
    }
        // if (this.isSelected) {
        //     this.likesCount--;
        //     this.isSelected = false;
        // } else {
        //     this.likesCount++;
        //     this.isSelected = true;
        // }
    get likesCount() {
        return this._likesCount;
    }

    get isSelected() {
        return this._isSelected
    }
}