import '../styles/review.css';
import toast, { Toaster } from 'react-hot-toast';


  const notify = () => toast.success('Submited Successfully !',
  {
    position:'top-center',
    icon:'😊',
    style:{
      borderRadius:'5px',
      padding:'10px 20px',
      background:'white',
      color:'black'
    }
  });


function Review() {
    return(
        <div className='reviewbody'>
        <div className='reviewBox'>
            <div className='reviewBorder'>
                <form>
                    <label><h2>HELP US TO IMPROVE MORE</h2></label>
                    <div className='infoReview'>
                        <div className='reviewLabel'>
                            <label>Name:</label><br/>
                        </div>
                        <div className='reviewInput'>
                            <input type='text' placeholder='Enter your name' required/><br/>
                        </div>
                        </div>
                    <div className='infoReview'>
                        <div className='reviewLabel'>
                            <label>Email:</label><br/>
                        </div>
                        <div className='reviewInput'>
                            <input type='text' placeholder='Enter your email' required/><br/>
                        </div>
                        </div>
                    <div className='infoReview'>
                        <div className='reviewLabel'>
                            <label>Age:</label><br/>
                        </div>
                        <div className='reviewInput'>
                            <input type='text' placeholder='Enter your age' required/><br/>
                        </div>
                    </div>
                    <div className='infoReview'>
                        <div className='reviewLabel'>
                            <label>Please provide rating for our services</label><br/>
                        </div>
                        <div className='reviewInput'>
                        </div>
                    </div>
                    <div className='reviewCheckbox'>
                        <div className='checkboxTitle'>
                            <label>FOOD</label>
                        </div>
                        <div className='checkboxOption'>
                            <div className='checkboxOptions'>
                                <input type='checkbox' name='terrible' /> Terrible
                            </div>
                            <div className='checkboxOptions'>
                                <input type='checkbox' name='Poor' /> Poor
                            </div>
                            <div className='checkboxOptions'>
                                <input type='checkbox' name='Good' /> Good
                            </div>
                            <div className='checkboxOptions'>
                                <input type='checkbox' name='Very Good' /> Very Good
                            </div>
                            <div className='checkboxOptions'>
                                <input type='checkbox' name='Best' /> Best
                            </div>
                        </div>
                    </div>
                    <div className='reviewCheckbox'>
                        <div className='checkboxTitle'>
                            <label>COST OF THE FOOD</label>
                        </div>
                        <div className='checkboxOption'>
                            <div className='checkboxOptions'>
                                <input type='checkbox' /> Terrible
                            </div>
                            <div className='checkboxOptions'>
                                <input type='checkbox' /> Poor
                            </div>
                            <div className='checkboxOptions'>
                                <input type='checkbox' /> Good
                            </div>
                            <div className='checkboxOptions'>
                                <input type='checkbox' /> Very Good
                            </div>
                            <div className='checkboxOptions'>
                                <input type='checkbox' /> Best
                            </div>
                        </div>
                    </div>
                    <div className='reviewCheckbox'>
                        <div className='checkboxTitle'>
                            <label>DELIVERY</label>
                        </div>
                        <div className='checkboxOption'>
                            <div className='checkboxOptions'>
                                <input type='checkbox' /> Terrible
                            </div>
                            <div className='checkboxOptions'>
                                <input type='checkbox' /> Poor
                            </div>
                            <div className='checkboxOptions'>
                                <input type='checkbox' /> Good
                            </div>
                            <div className='checkboxOptions'>
                                <input type='checkbox' /> Very Good
                            </div>
                            <div className='checkboxOptions'>
                                <input type='checkbox' /> Best
                            </div>
                        </div>
                    </div>
                    <div className='reviewCheckbox'>
                        <div className='checkboxTitle'>
                            <label>QUALITY</label>
                        </div>
                        <div className='checkboxOption'>
                            <div className='checkboxOptions'>
                                <input type='checkbox' /> Terrible
                            </div>
                            <div className='checkboxOptions'>
                                <input type='checkbox'  /> Poor
                            </div>
                            <div className='checkboxOptions'>
                                <input type='checkbox'  /> Good
                            </div>
                            <div className='checkboxOptions'>
                                <input type='checkbox' /> Very Good
                            </div>
                            <div className='checkboxOptions'>
                                <input type='checkbox' /> Best
                            </div>
                        </div>
                    </div>
                    <div className='reviewSuggestion'>
                        <div className='Suggestiontitle'>
                            <label>Have any other suggestions</label>
                        </div>
                        <div className='Suggestionbox'>
                        <textarea name='message' rows='2 ' placeholder='Any Suggestions' required/>
                        </div>
                    </div>
                    <div className='reviewSubmit'>
                        <button className='button55' onClick={notify}>Submit</button>
                        <Toaster />
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}

export default Review;