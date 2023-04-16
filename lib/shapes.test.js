const fs = require('fs')
const path = require('path')
const {generateSvg,saveSvg} = require('./shapes')

jest.mock('fs', () => ({
    writeFile: jest.fn((filePath, data, callback) => {
        callback(null)
    })
}))

describe('Shape Module', () => {
    describe('generateSvg()', () => {
        it('should generate an SVG string wiith provided input', () => {
            const text = 'User Text';
            const textColor = 'red';
            const shape = 'circle';
            const shapeColor = 'green'

            const expectedSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
            <text x="150" y="125"  font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>
        `;

            const svgString =  generateSvg(text,textColor,shape,shapeColor)

            expect(svgString).toEqual(expectedSVG)
        })
    })

    describe('saveSvg()', () => {
        it('should save the SVG string to a file', (done) => {
            const svgString = '<svg></svg>'
            const fileName ='test.svg'

             saveSvg(svgString, fileName, (err) =>{
                expect(err).toBeNull()

                //checkk if writeFil was called with the correct arguments
                expect(fs.writeFile).toHaveBeenCalledWith(
                    path.join(__dirname, '..', 'examples', fileName),
                    svgString,
                    expect.any(Function)
                )
                done()
            })
        })

        it('should handle errors when saving SVG string to a file', (done) => {
          // Mock fs.writeFile to throw an error
            fs.writeFile.mockImplementationOnce((filePath, data, callback) => {
                const error = new Error("Failed to save file");
                callback(error);
            });

            const svgString = "<svg></svg>";
            const fileName = "test.svg";

             saveSvg(svgString, fileName, (err) => {
                expect(err).toEqual(expect.any(Error));

                // Check if fs.writeFile was called with the correct arguments
                expect(fs.writeFile).toHaveBeenCalledWith(
                path.join(__dirname, "..", "examples", fileName),
                svgString,
                expect.any(Function)
                );

                done();
            });
        })
    })
})