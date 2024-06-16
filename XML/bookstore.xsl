<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <head>
                <style>
                    .grid-container {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 10px;
                    }
                    .grid-item {
                    border: 1px solid #ddd;
                    padding: 10px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    }
                </style>
            </head>
            <body>
                <h2>Bookstore</h2>
                <div class="grid-container">
                    <xsl:for-each select="bookstore/book">
                        <div class="grid-item">
                            <h3>
                                <xsl:value-of select="title" /> (<xsl:value-of select="title/@lang" />
        )
              </h3>
                            <p>Category: <xsl:value-of select="@category" /></p>
                            <p>Author: <xsl:value-of select="author" /></p>
                            <p>Year: <xsl:value-of select="year" /></p>
                            <p>Price: <xsl:value-of select="price" /></p>
                        </div>
                    </xsl:for-each>
                </div>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>