namespace app {
  interface IListResourceClass extends IList,
  ng.resource.IResource<IListResourceClass> {}
  interface IListResource extends
  ng.resource.IResourceClass<IListResourceClass> {
    update (params: Object, body: Object);
  }
}
