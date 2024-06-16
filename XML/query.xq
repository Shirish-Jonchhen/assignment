let $doc := doc("bookstore.xml")/bookstore
for $book in $doc/book
where $book/price >= 200
return
  <book>
    <title>{$book/title/text()} ({$book/title/@lang})</title>
    <category>{$book/@category}</category>
    <author>{$book/author/text()}</author>
    <year>{$book/year/text()}</year>
    <price>{$book/price/text()}</price>
  </book>
