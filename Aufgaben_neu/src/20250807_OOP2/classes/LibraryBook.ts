class LibraryBook {
  private _id: string = ""
  private _currentOnwer: string = ""
  private _title: string = ""
  public _author: string = ""
  private _isBorrowed: boolean = false

  constructor(title: string, author: string) {
    this._title = title
    this._author = author
  }
}

export default LibraryBook
