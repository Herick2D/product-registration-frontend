import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import {Search, PlusCircle} from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './components/ui/dialog';
import { Label } from './components/ui/label';

export function App() {


  return (
    <div className='p-6 max-w-4xl mx-auto space-y-3'>
      <h1 className='text-3xl font-bold'>Products</h1>

      <div className='flex items-center justify-between'>
        <form className='flex items-center gap-2'>
          <Input name='id' placeholder='Order ID' />
          <Input name='name' placeholder='Product name' />
          <Button type='submit' variant={'outline'}>
          <Search className='w-4 h-4 mr-2' />
          Filter results</Button>
        </form>

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className='w-4 h-4 mr-2' />
              New product
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>New product</DialogTitle>
              <DialogDescription>Create a new product</DialogDescription>
            </DialogHeader>

            <form className='space-y-6'>
              <div className='grid grid-cols-4 items-center text-right gap-2'>
                <Label htmlFor='name'>Product</Label>
                <Input className='col-span-3' id='name'/>
              </div>
              <div className='grid grid-cols-4 items-center text-right gap-2'>
                <Label htmlFor='price'>Price</Label>
                <Input className='col-span-3' id='price'/>
              </div>


              <DialogFooter>
                <DialogClose asChild>
                <Button type='button' variant={'outline'}>Cancel</Button>
                </DialogClose>
                <Button type='submit'>Save</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

          
      </div>
      <div className='border rounded-lg p-2'>
        <Table>
          <TableHeader>
            <TableHead>ID</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{index}</TableCell>
                  <TableCell>Product {index}</TableCell>
                  <TableCell>R$ 49,00</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
