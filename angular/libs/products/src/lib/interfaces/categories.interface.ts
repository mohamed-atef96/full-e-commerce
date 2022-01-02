export interface ICategorey{
  _id?:string;
  name:string,
  icon:string;
}

export  const defaultCategory:ICategorey ={
  name: '',
  icon: ''
}
