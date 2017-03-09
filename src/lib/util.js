// Check if server responded with an error because fetch does not reject
//  failed HTTP status codes.
const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

// Return object containing the title, number of subscribers, and description.
const getSubredditInfo = ({title, subscribers, public_description}) => (
  {title, subscribers, public_description}
)

// Returns an array of objects, each containing the title, number of subscribers,
//  and description.
const extractData = (results) => (
  results.data.children.map((child) => (getSubredditInfo(child.data)))
)

// Makes an API call requesting the ReactJS subreddits, takes success and error
//  callbacks as arguments.  Passes array of objects containing title, number
//  of subscribers, and description to the success callback.
export const fetchSubreddits = (successCb, errorCb) => {
  fetch('https://www.reddit.com/subreddits/search.json?q=reactjs')
    .then(handleErrors)  // throws error if HTTP status code is not 200
    .then(
      (result) => (result.json()),
      (err) => errorCb(err)
    ).then(
      (parsedResponse) => successCb(extractData(parsedResponse)),
    )
}
