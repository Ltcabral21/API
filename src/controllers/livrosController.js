import livros from "../models/Livro.js";

class LivroController {


    static ShowBooks = (req,res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros)
    })
}
    static ShowBooksById = (req,res) => {
       const id = req.params.id;

       livros.findById(id,(err, livros) => {
        if(err){
            res.status(400).send({message: `${err.message}-ID not found` })
        }else{
                res.status(200).send(livros);
            }
       })
    }

  static AddNewBook = (req,res) => {
 let livro = new livros(req.body);

 livro.save((err) =>{
    if(err){
        res.status(500).send({message: `${err.message } - error while trying register`})    } 
        else{
            res.status(201).send(livro.toJSON())
        };
 });
  }

  static UptadeBook = (req,res) => {
    const id = req.params.id;

    livros.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
        if(!err){
            res.status(200).send({message: 'Book uptaded  successfully' }) 
        }else{
            res.status(500).send({message:err.message})
        }
    })
 
  }

  static Bookdelete = (req,res) => {
    const id = req.params.id;

    livros.findByIdAndDelete(id, (err) => {
        if(!err){
            res.status(200).send({message:'Book deleted successfully '})
            }else{
                res.status(500).send({message: err.message});
            }
        })
    }
  }
export default LivroController