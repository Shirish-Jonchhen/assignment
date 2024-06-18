let $doc := doc("pushpa_kaju_bookstore.xml")/bookstore
return
<html>
  <head>
    <title>Books Priced 200 and Above</title>
  </head>
  <body>
    <h1>Books Priced 200 and Above</h1>
    <ul>
    {
      for $book in $doc/book
      where xs:decimal($book/price) >= 200
      return
        <li>
          <p><strong>Title:</strong> {$book/title/text()}</p>
          <p><strong>Category:</strong> {$book/@category}</p>
          <p><strong>Author:</strong> {$book/author/text()}</p>
          <p><strong>Year:</strong> {$book/year/text()}</p>
          <p><strong>Price:</strong> {$book/price/text()}</p>
        </li>
    }
    </ul>
  </body>
</html>
